// Root
const WholePage = document.getElementsByClassName("_1XkO3 two")[0];

    // Left Child of Root
    const ContactPart = WholePage.childNodes[2];

        // Children of Contact Page
        const TopBar = ContactPart.childNodes[0].childNodes[0];
        const SearchBar = ContactPart.childNodes[0].childNodes[2].firstChild
        const ListOfPeople = Object.values(ContactPart.getElementsByClassName("_2nY6U vq6sj"));
            const ListOfNames = ListOfPeople.map(i => i.getElementsByClassName("_3OvU8")[0])
                const OnlyNames = ListOfNames.map(i => i.childNodes[0])
                const LastChat = ListOfNames.map(i => i.childNodes[1])
            const ListOfIcons = ListOfPeople.map(i => i.getElementsByClassName("_2EU3r")[0])
            
    // Right Child of Root
    const ChatPart = WholePage.childNodes[3];

        // Children of Chat page
        const ChatBackground = ChatPart.firstChild;
        const OutgoingMessage = Object.values(ChatPart.getElementsByClassName("_2wUmf message-out focusable-list-item"))
            const OutgoingMessageBackground = OutgoingMessage.map(i => i.getElementsByClassName("Nm1g1 _22AX6")[0]);
        const IncomingMessage = Object.values(ChatPart.getElementsByClassName("_2wUmf message-in focusable-list-item"))
            const IncomingMessageBackground = IncomingMessage.map(i => i.getElementsByClassName("Nm1g1 _22AX6")[0]);



