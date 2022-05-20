import { Box, Flex, Text } from '@chakra-ui/react';

import { GroupPermission } from '../../../utils/constants';

import GroupItem from './GroupItem';

const GroupContainer = () => {
  const newData = GroupPermission;

  return (
    <Flex flexDirection={'column'}>
      <Text fontWeight={'bold'} fontSize={'2xl'}>
        Quản lý quyền group
      </Text>
      <Box>
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          Quản lý quyền customer
        </Text>
        {newData.map((item, index: number) =>
          item.nameGroup == 'Customer' ? (
            <GroupItem permission={item} key={index} />
          ) : null
        )}
      </Box>
      <Box>
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          Quản lý quyền seller
        </Text>
        {newData.map((item, index: number) =>
          item.nameGroup == 'Seller' ? (
            <GroupItem permission={item} key={index} />
          ) : null
        )}
      </Box>
      <Box>
        <Text fontWeight={'bold'} fontSize={'2xl'}>
          Quản lý quyền shipper
        </Text>
        {newData.map((item, index: number) =>
          item.nameGroup == 'Shipper' ? (
            <GroupItem permission={item} key={index} />
          ) : null
        )}
      </Box>
    </Flex>
  );
};

export default GroupContainer;