export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Shivam",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "jitendra",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Shivam",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "jitendra",
    _id: "2",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Shivam",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "jitendra",
    },
    _id: "2",
  },
];

export const sampleMessages = [
  {
    attachments: [],
    content: "La*da ga** mara bsdk*",
    _id: "sjvsvhsdjhbd",
    sender: {
      _id: "user._id",
      name: "Prince",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
  {
    attachments: [
      {
        public_id: "Lauda ka message hai 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "",
    _id: "sjvsvhsdjhbd",
    sender: {
      _id: "sjvhjbhsd",
      name: "Prince 2",
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Shivam chauhan",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "@shivamchauhan1234",
      friends: 20,
      groups: 5,
    },
    {
      name: "Shivam",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "@shivamchauhan12",
      friends: 13,
      groups: 3,
    },
  ],
  chats: [
    {
      name: "Shivam group",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 3,
      totalMessages: 26,
      creator: {
        name: "shivamchauha 2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Shivam boi",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "7", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "shivamchauha 2",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachments: [],
      content: "hjsv hjdsbsd hjbhbnas",
      _id: "shshhshshsh",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chahan",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
      attachments: [
        {
          public_id: "assdhhs 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      _id: "shsbhbsbjbs",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Chaihan 2",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
