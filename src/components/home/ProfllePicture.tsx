import React from "react";

type Props = {
  headline: string;
};

const ProfilePicture: React.FC<Props> = ({ headline }) => {
  return (
    <div className="max-w-md mx-auto text-center">
      <img src="/img/profile-face.jpg" />
      <h1 className="text-3xl mt-6">{headline}</h1>
    </div>
  );
};

export default ProfilePicture;
