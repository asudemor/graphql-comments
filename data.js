const users = [
    {
        id: '1',
        fullName: "Mehmet Seven"
    },
    {
        id: '2',
        fullName: "Asude Mor"
    },
];

const posts = [
    {
        id: '1',
        title: "Mehmet'in gönderisi",
        user_id: '1',
    },
    {
        id: '2',
        title: "Mehmet'in diğer gönderisi",
        user_id: '1',
    },
    {
        id: '3',
        title: "Asude'nin gönderisi",
        user_id: '2',
    },
];


const comments = [
    {
        id: '1',
        text: "Lorem Ipsum",
        post_id: '1',
        user_id: "2"
    },
    {
        id: '2',
        text: "Lorem Ipsum Doler",
        post_id: '1',
        user_id: "2"

    },
    {
        id: '3',
        text: "foo bar",
        post_id: '2',
        user_id: "1"
    },
    {
        id: '4',
        text: "foo bar baz",
        post_id: '3',
        user_id: "1"
    },
];

module.exports= {
    users,
    posts,
    comments,
}