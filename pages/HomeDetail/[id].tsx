
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

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
	return {
		paths: [
			{ params: { id: '1' } }, 
			{ params: { id: '2' } },
			{ params: { id: '3' } },
			{ params: { id: '4' } },
		],
		fallback: false
	}
}

export default HomeDetail