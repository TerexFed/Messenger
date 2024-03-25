type chatItem = {
    id: number;
    title: string;
    lastMessage: string;
    lastMessageSent: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    changeUser?: any;
}

export default chatItem