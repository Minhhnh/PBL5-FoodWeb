import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { IconButton, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { orderAPI } from '../../api/repositoryFactory';
import './CustomPagnitation.css';
import HistoryOrderList from './HistoryOrderList';

interface HistoryOrderPagnitationProps {
  isShipped: string;
}

const HistoryOrderPagnitation = (props: HistoryOrderPagnitationProps) => {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    let mounted = true;
    if (props.isShipped == 'true') {
      orderAPI.getTotalPageOrderShipped().then((res) => {
        if (mounted) {
          setCurrentPage(1);
          setTotalPage(res.data);
        }
      });
    } else {
      orderAPI.getTotalPageOrderNotShipped().then((res) => {
        if (mounted) {
          setCurrentPage(1);
          setTotalPage(res.data);
        }
      });
    }
    return () => {
      mounted = false;
    };
  }, [props.isShipped]);
  const goToPage = (isIncrease: boolean) => {
    if (isIncrease) {
      if (currentPage > totalPage && totalPage > 0) {
        setCurrentPage((prevPage) => prevPage + 1);
      } else setCurrentPage(1);
    } else {
      if (currentPage == 1 && totalPage > 0) {
        setCurrentPage(totalPage);
      } else {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }
  };
  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
    >
      <HistoryOrderList numberPage={currentPage} isShipped={props.isShipped} />
      {totalPage > 0 ? (
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <IconButton
              variant="outline"
              colorScheme="main"
              aria-label="next"
              fontSize={'1.2rem'}
              icon={<ChevronRightIcon />}
              onClick={() => {
                goToPage(false);
              }}
            />
          }
          previousLabel={
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="prev"
              fontSize={'1.2rem'}
              icon={<ChevronLeftIcon />}
              onClick={() => {
                goToPage(true);
              }}
            />
          }
          pageCount={totalPage || 1}
          containerClassName={'container'}
          pageLinkClassName={'page-link'}
        />
      ) : null}
    </Stack>
  );
};

export default HistoryOrderPagnitation;