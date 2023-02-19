import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Skeleton as SkeletonChakra,
  SkeletonText,
} from '@chakra-ui/react';

const Skeleton = () => (
  <Card>
    <CardHeader>
      <SkeletonChakra height="20px" />
    </CardHeader>
    <CardBody>
      <SkeletonText />
    </CardBody>
    <CardFooter>
      <SkeletonChakra height="40px" />
      <SkeletonChakra height="40px" />
      <SkeletonChakra height="40px" />
    </CardFooter>
  </Card>
);

export default Skeleton;
