import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#e6e6e6',
    },
    divider: {
        backgroundColor: '#7ebaff',
        opacity: .15
    },
    newTweet: {
        padding: 18,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    input: {
        flex: 1,
        marginRight: '1rem',
        padding: '.3rem',
        border: '.1px solid #ccc',
        borderRadius: 3,
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    newTweetBtn: {
        minWidth: '5rem',
        height: '30px',
        borderRadius: '1rem',
        fontFamily: 'shabnam',
        lineHeight: '1rem',
        color: 'white'
    },
    newTweetImgBtn: {
        border: '.5px solid #3337',
        padding: '.2rem',
        borderRadius: '50%',
        transform: 'translateX(.8rem)'
    },
    tweetItem: {
        padding: 18,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '.5rem'
    },
    tweetItemName: {
        fontWeight: '600',

    },
    tweetItemId: {
        fontSize: '.9rem',
        color: theme.palette.text.hint,
        direction: 'ltr',
        marginRight: '.5rem',
        paddingTop: '.15rem'
    },
    tweetText: {
        fontSize: '.9rem',
        marginTop: '.75rem',
    },
    likeCount: {
        fontSize: '.8rem',
        color: theme.palette.text.hint,
        marginLeft: '.7rem !important'
    },
    tweetImg: {
        width: '10rem',
        height: '10rem',
        backgroundSize: 'cover',
        marginTop: '1rem'
    }


}))

export default useStyle