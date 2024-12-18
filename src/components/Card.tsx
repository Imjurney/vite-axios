import styled, { keyframes } from "styled-components";

// 페이드 인 애니메이션 정의

interface CardProps {
  name: string;
  age: number;
  img: string;
  isBest: boolean;
}
const Card = ({ name, age, img, isBest }: CardProps) => {
  return (
    <CardBox>
      <BestBadge $isBest={isBest}>Best User</BestBadge>
      <CardImage src={img} width={100} height={100} alt="" />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{age}</CardDescription>
    </CardBox>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BestBadge = styled.span<{ $isBest: boolean }>`
  display: ${({ $isBest }) => ($isBest ? "block" : "none")};
  background: #f8d7da;
  color: #721c24;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CardImage = styled.img`
  border-radius: 4px;
  margin-bottom: 16px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  animation: ${fadeIn} 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: white;
  color: #333;
`;

const CardTitle = styled.h1`
  font-size: 24px;
  margin: 0;
`;
const CardDescription = styled.p`
  font-size: 16px;
  margin: 0;
`;
export default Card;
