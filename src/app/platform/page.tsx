const pillars = [
  {
    title: 'Anti-Corruption',
    content: 'Root out pay-to-play politics and expose dark money.'
  },
  {
    title: 'Healthcare',
    content: 'Universal care that puts patients before profits.'
  },
  {
    title: 'Economic Justice',
    content: 'Fair wages and an economy that works for everyone.'
  },
  {
    title: 'Tech for the People',
    content: 'Open technology that empowers communities, not corporations.'
  },
  {
    title: 'Transparency',
    content: 'A government that answers to the people in the light of day.'
  },
];

export default function Platform() {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-6">Platform</h1>
      {pillars.map((pillar) => (
        <details key={pillar.title} className="border-b py-2">
          <summary className="cursor-pointer font-semibold">{pillar.title}</summary>
          <p className="mt-2 ml-4">{pillar.content}</p>
        </details>
      ))}
    </div>
  );
}