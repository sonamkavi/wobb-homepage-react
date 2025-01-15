import React from "react";

const CampaignCard = ({ brand, payout, progress }) => {
  return (
    <div className="campaign-card">
      <h2 className="campaign-brand">{brand}</h2>
      <p className="campaign-payout">Payout: {payout}</p>

      {/* Dynamically display the progress */}
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}></div>
      </div>
      <p className="campaign-progress">Hiring Progress: {progress}%</p>
    </div>
  );
};

export default CampaignCard;
