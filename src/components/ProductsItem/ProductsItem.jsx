// import { useState } from 'react';
// import { TopicModal } from 'components/TopicModal';
import {
  Title,
  CardWrapper,
  MetaWrapper,
  Text,
  Button,
  LabelRecommended,
  Decor,
  TopInfoWrapper,
  Caption,
} from './ProductsItem.styled';
// import { Link } from 'react-router-dom';

export const ProductCard = ({
  product: { id, title, calories, category, weight, recommended = true },
  onDelete,
}) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  //   const openModal = () => setIsModalOpen(true);

  //   const closeModal = () => setIsModalOpen(false);

  //   const addCard = () => onAdd(id);

  return (
    <CardWrapper>
      <TopInfoWrapper>
        <Decor>diet</Decor>
        <LabelRecommended $recommended={recommended}></LabelRecommended>
        <Text>
          <b>{recommended ? 'Recommended' : 'Not recommended'}</b>
        </Text>
        <Button>Add</Button>
      </TopInfoWrapper>

      <Title>{title}</Title>

      <MetaWrapper>
        <Caption>Calories:</Caption> <Text>{calories}</Text>
        <Caption>Category: </Caption> <Text>{category}</Text>
        <Caption>Weight:</Caption> <Text>{weight}</Text>
      </MetaWrapper>
    </CardWrapper>
  );
};