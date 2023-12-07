import FriendScreen from './Friend';
import HomeScreen from './Home';
import NotificationScreen from './Notification';
import SettingScreen from './Setting'
import MarketScreen from './Market'
import WatchScreen from './Watch'

export const TabNavigation = [
    {
        id: 1,
        route: HomeScreen,
        name: 'Home',
        activeIconName: 'home',
        activeiconType: 'Entypo',
        inactiveIconName: 'home-outline',
        inactiveIconType: 'MaterialCommunityIcons',
        size: 25,
        unFocusSize: 28,
    },
    {
        id: 2,
        route: WatchScreen,
        name: 'Watch',
        activeIconName: 'youtube-tv',
        activeiconType: 'MaterialCommunityIcons',
        inactiveIconName: 'television-play',
        inactiveIconType: 'MaterialCommunityIcons',
        size: 25,
        unFocusSize: 25,
    },
    {
        id: 3,
        route: FriendScreen,
        name: 'Friends',
        activeIconName: 'people-sharp',
        activeiconType: 'Ionicons',
        inactiveIconName: 'people-outline',
        inactiveIconType: 'Ionicons',
        size: 25,
        unFocusSize: 25,
    },
    {
        id: 4,
        route: MarketScreen,
        name: 'MarketPlace',
        activeIconName: 'shop',
        activeiconType: 'Entypo',
        inactiveIconName: 'storefront-outline',
        inactiveIconType: 'MaterialCommunityIcons',
        size: 25,
        unFocusSize: 25,
    },
    {
        id: 5,
        route: NotificationScreen,
        name: 'Notification',
        activeIconName: 'notifications',
        activeiconType: 'Ionicons',
        inactiveIconName: 'notifications-outline',
        inactiveIconType: 'Ionicons',
        size: 25,
        unFocusSize: 25,
    },
    {
        id: 6,
        route: SettingScreen,
        name: 'Setting',
        activeIconName: 'menu',
        activeiconType: 'Ionicons',
        inactiveIconName: 'menu-outline',
        inactiveIconType: 'Ionicons',
        size: 25,
        unFocusSize: 25,
    },
];