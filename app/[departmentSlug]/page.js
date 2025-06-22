import Link from "next/link";

export default async function Department({params}) {
  const department = (await params).departmentSlug;

  return (
    <>
    <h1>Department 1</h1>
    <h2><Link href={`${department}/sop_1`}>Sop 1</Link></h2>
    <h2><Link href={`${department}/sop_2`}>Sop 2</Link></h2>
    </>
  );
}