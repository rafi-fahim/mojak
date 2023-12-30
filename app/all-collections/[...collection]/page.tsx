import CollectionPage from "@/components/CollectionPage";
import PoemReadPage from "@/components/PoemReadPage";

const page =  ({ params }: { params: { collection: string[] } }) => {
 
  if (params.collection.length === 1) {
    return <CollectionPage  params={params.collection}   />    
  } else if (params.collection.length === 2) {
    return <PoemReadPage params={params.collection} />
  }
};

export default page;


  