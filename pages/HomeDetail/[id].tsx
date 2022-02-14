
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { httpProvider } from '@/providers/http'

function HomeDetail({id}: InferGetStaticPropsType<typeof getStaticProps>){
	const router = useRouter()

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	return <div>
		{id}
	</div>
}

export const getStaticProps: GetStaticProps = async ({params}) => {
	return {
		props: {
			id: params!.id
		},
		revalidate: 1
	}
}

export const getStaticPaths: GetStaticPaths = async () => {

	const Ids: Array<number> = await httpProvider.get('/ids')
	const IdsMap = Ids.map(item => ({ params: { id: String(item)}}))

	return {
		paths: IdsMap,
		fallback: false
	}
}

export default HomeDetail