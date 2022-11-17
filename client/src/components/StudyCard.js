import styled from "styled-components";
import { HeartFillIcon, LocationIcon } from "@goorm-dev/gds-goormthon";
import { MdPeopleAlt } from "react-icons/md";

export default function StudyCard({ index, item, handleViewDetail }) {
  return (
    <StudyBox onClick={(e) => handleViewDetail(e)}>
      <IconBox style={{ float: "right" }}>
        <HeartFillIcon style={{ color: "lightGray" }} />
      </IconBox>
      <UserName className="font">{item.study_name}</UserName>
      <StudyTitle className="font-bold">스터디</StudyTitle>
      <div className="partyInfo">
        <div className="partyLocation">
          <LocationIcon />
          <h6>place</h6>
          <p>{item.location}</p>
        </div>
        <div className="partyMembers">
          <MdPeopleAlt />
          <p>{`${item.members} / 10`}</p>
        </div>
      </div>
    </StudyBox>
  );
}

const StudyBox = styled.div`
  height: 75px;
  margin: 20px;
  border: 1px solid black;
  padding: 0 35px;

  .partyInfo {
    margin-left: -2px;
    text-align: left;
    width: 100%;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    /* border: 1px solid black; */
  }

  .partyLocation {
    display: flex;
    align-items: center;
  }

  .partyMembers {
    display: flex;
  }
`;

const IconBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 10px -10px 0 0;
`;

const UserName = styled.p`
  color: #000000;
  margin: 10px 0 5px 0;
  text-align: left;
  font-size: 4px;
  font-weight: 200;
`;

const StudyTitle = styled.p`
  text-align: left;
  color: #000000;
  margin-top: 4px;
  font-size: 16px;
  font-weight: bold;
`;
