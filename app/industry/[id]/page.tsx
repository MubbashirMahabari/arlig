import industryData from "@/data/industryData";
import IndustryClient from "./IndustryClient";

export async function generateStaticParams() {
  return industryData.map((industry) => ({
    id: industry.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsed = id ? parseInt(id, 10) : NaN;

  if (Number.isNaN(parsed)) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Invalid industry id</h2>
      </div>
    );
  }

  const industry = industryData.find((b) => b.id === parsed);
  if (!industry) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Industry not found</h2>
      </div>
    );
  }

  return <IndustryClient industry={industry} />;
}
