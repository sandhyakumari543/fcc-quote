import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = ({
  assignNewQuoteIndex,
  selectedQuote,
  generateRandomColor,
  buttonColor,
  buttonTextcolor,
  twitterIconColor,
  tumblrIconColor,
  paragraphColor,
}) => (
 
  <Card style={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
    <CardContent>
      {selectedQuote.quote.split('\n').map((paragraph, index) => (
        <Typography
          key={index}
          id="text"
          style={{
            color: paragraphColor,
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            padding: '0px',
            margin: '22px 22px', 
          }}
        >
          🙶 {paragraph}
        </Typography>
      ))}

      <Typography
        id="author"
        style={{
          color: paragraphColor,
          fontSize: '1rem',
          textAlign: 'right',
          marginRight: '22px', 
        }}
      >
        - {selectedQuote.author}
      </Typography>
    </CardContent>

    <CardActions style={{ justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          id="tweet-quote"
          target="_blank"
          size="medium"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${selectedQuote.quote}&hashtags=thewebdevcoach`
          )}
          style={{
            backgroundColor: buttonColor,
            color: buttonTextcolor,
            marginLeft: '22px', 
            marginBottom: '12px',
            borderRadius: '5px',
          }}
        >
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1rem' }}></FontAwesomeIcon>
        </IconButton>

        <IconButton
          id="tumblr-quote"
          target="_blank"
          size="medium"
          href={encodeURI(
            `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=thewebdevcoach&caption=${encodeURIComponent(
              selectedQuote.quote + ' - ' + selectedQuote.author
            )}`
          )}
          style={{
            backgroundColor: buttonColor,
            color: buttonTextcolor,
            marginLeft: '5px',
            marginBottom: '12px',
            borderRadius: '5px',
          }}
        >
          <FontAwesomeIcon icon={faTumblr} style={{ fontSize: '1rem' }}></FontAwesomeIcon>
        </IconButton>
      </div>

      <Button
        id="new-quote"
        size="medium"
        onClick={() => {
          assignNewQuoteIndex();
          generateRandomColor();
        }}
        style={{
          backgroundColor: buttonColor,
          color: buttonTextcolor,
          marginBottom: '12px',
          marginRight: '22px', 
        }}
      >
        Next Quote
      </Button>
    </CardActions>
  </Card>

  

);

export default QuoteMachine;
