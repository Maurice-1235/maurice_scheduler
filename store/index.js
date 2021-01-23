export const state = () => ({
    headers: {
        Assignment: [
            "ID",
            "Subject",
            "Title",
            "Detail",
            "Due date",
            "Score",
            "Done",
        ],
        Subject: [
            "ID",
            "Name",
        ],
    },
    col: {
        Assignment: [
            ["Subject", 0, 'subject'],
            ["Title", 0, 'title'],
            ["Detail", 0, 'detail'],
            ["Due Date", 1, 'duedate'],
            ["Score", 0, 'score'],
            ["Done", 0, 'done'],
        ],
        Subject: [
            ["Name", 0, 'name'],
        ],
    },
})