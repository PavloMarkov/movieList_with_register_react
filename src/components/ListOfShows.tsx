import {
  Typography, CardActionArea, Box, CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import InfiniteScroll from 'react-infinite-scroller';

import React, { useEffect, useState } from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

type Show = {
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: number;
  imDbRatingCount: number;
  image: string;
  rank: number;
  title: string;
  year: number;
};

type Props = {
  isBrowse: boolean;
};

export const ListOfShows: React.FC<Props> = (props) => {
  const { isBrowse } = props;

  const [listOfShows, setListOfShows] = useState<Show[]>([]);
  const perPage = 20;
  const totalPages = Math.ceil(listOfShows.length / perPage);

  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setTimeout(() => {
      setPage(value);
    },
    500);
  };

  const loadMoreShows = () => {
    setTimeout(() => {
      setPage(prev => prev + 1);
    },
    500);
  };

  const [expanded, setExpanded] = useState(false);
  const [expandId, setExpandedId] = useState('');

  const handleExpandClick = (value: string) => {
    if (expanded) {
      setExpanded(!expanded);
      setExpandedId('');
    } else {
      setExpanded(!expanded);
      setExpandedId(value);
    }
  };

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((prop: ExpandMoreProps) => {
    const { expand, ...other } = prop;

    return (
      <IconButton
        {...other}
      />
    );
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  useEffect(() => {
    fetch('https://imdb-api.com/en/API/Top250TVs/k_a7n25zbu',
      {
        method: 'GET',
      })
      .then(response => response.json())
      .then(response => {
        setListOfShows(response.items);
        // eslint-disable-next-line no-console
        console.log(listOfShows);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err));
  }, []);

  const showList = listOfShows.slice(0,
    page * perPage > listOfShows.length
      ? listOfShows.length
      : page * perPage);

  return (
    <>
      <section>
        <InfiniteScroll
          pageStart={page}
          loadMore={loadMoreShows}
          hasMore={showList.length < listOfShows.length}
          loader={(
            <Box
              sx={{
                display: 'flex',
                margin: '20px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={0}
            >
              <CircularProgress />
            </Box>
          )}
        >
          <div className="shows">
            {showList.map(show => (
              <Card
                sx={{ maxWidth: 400 }}
                key={show.id}
              >
                <CardActionArea
                  sx={{
                    position: 'relative',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="345"
                    image={show.image}
                    alt={show.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body2" component="p">
                      {show.fullTitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`Year: ${show.year}`}
                    </Typography>
                  </CardContent>
                  <Box
                    component="div"
                    sx={{
                      position: 'absolute',
                      top: '40%',
                      left: '50%',
                      color: '#fff',
                      fontSize: {
                        sm: '16px',
                        md: '40px',
                        lg: '45px',
                      },
                      fontWeight: 'bold',
                      textAlign: 'center',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {show.title}
                  </Box>
                  {!isBrowse && (
                    <ExpandMore
                      expand={expandId === show.id}
                      onClick={() => handleExpandClick(show.id)}
                      aria-expanded={expandId === show.id}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  )}
                </CardActionArea>
                {expandId === show.id && (
                  <Collapse in={expandId === show.id} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{`Crew: ${show.crew}`}</Typography>
                      {show.imDbRating > 7
                        ? <ThumbUpIcon />
                        : <ThumbDownIcon />}
                    </CardContent>
                  </Collapse>
                )}
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </section>
      <section>
        <Stack
          sx={{ m: 2 }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </section>
    </>
  );
};
