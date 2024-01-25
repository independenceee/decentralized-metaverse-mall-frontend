import configs from "@/configs";

import { HomeIcon, AddressCardIcon, TransactionIcon } from "@/components/Icons";

const publicRoutes = [
    { name: "Home", redirect: configs.routes.home },
    { name: "About", redirect: configs.routes.about },
    { name: "Services", redirect: configs.routes.services },
    { name: "Roadmap", redirect: configs.routes.roadmap },
    { name: "Contact", redirect: configs.routes.contact },
];

const privateRoutes = [
    { name: "Home", redirect: configs.routes.private.home, Icon: HomeIcon },
    { name: "Transaction", redirect: configs.routes.private.trasaction, Icon: TransactionIcon },
    { name: "Voucher", redirect: configs.routes.private.voucher, Icon: AddressCardIcon },
];

export { privateRoutes, publicRoutes };
