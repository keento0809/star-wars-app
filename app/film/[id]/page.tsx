export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return <div className="my-10 px-4">Film detail page: {id}</div>;
}
