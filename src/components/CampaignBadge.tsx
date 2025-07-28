import type { ReactElement } from 'react';

export default function CampaignBadge(): ReactElement {
  return (
    <div className="border p-4 text-center rounded">
      <p className="mb-2">Embed this badge on your site</p>
      <code className="block p-2 bg-gray-100 text-sm overflow-x-auto">&lt;a href=&quot;https://example.com&quot;&gt;&lt;img src=&quot;https://example.com/badge.png&quot; alt=&quot;Elias 2026&quot;/&gt;&lt;/a&gt;</code>
    </div>
  );
}
