import React from "react";
import CampaignCard from "./CampaignCard";

const CampaignList = () => {
  const campaigns = [
    { brand: "Brand A", payout: "Fixed Pay", progress: 60 },
    { brand: "Brand B", payout: "Barter", progress: 80 },
    { brand: "Brand C", payout: "Refunds", progress: 40 },
  ];

  return (
    <section className="campaign-list-section">
      <h1 className="campaign-list-title">Active Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign, index) => (
          <CampaignCard
            key={index}
            brand={campaign.brand}
            payout={campaign.payout}
            progress={campaign.progress}
          />
        ))}
      </div>
    </section>
  );
};

export default CampaignList;
