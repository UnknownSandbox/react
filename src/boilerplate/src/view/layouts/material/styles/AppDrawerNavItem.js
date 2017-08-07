export default theme => ({
    button: theme.mixins.gutters({
        borderRadius: 0,
        justifyContent: 'flex-start',
        textTransform: 'none',
        width: '100%',
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest,
        }),
        '&:hover': {
            textDecoration: 'none',
        },
    }),
    navItem: {
        ...theme.typography.body2,
        display: 'block',
        paddingTop: 0,
        paddingBottom: 0,
    },
    navLink: {
        fontWeight: theme.typography.fontWeightRegular,
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
    navLinkButton: {
        color: theme.palette.text.secondary,
        textIndent: 24,
        fontSize: 13,
    },
    activeButton: {
        color: theme.palette.text.primary,
    },
})