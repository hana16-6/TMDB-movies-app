import { RiCalendarEventFill, RiFilePaper2Line } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi';
const MOVIES_DROPDOWN_LINK = [
    {
        title: 'popular',
        path: '/type/movie/popular',
        icon: BiCategoryAlt,
    },
    {
        title: 'Now Playing',
        path: '/type/movie/now_playing',
        icon: FiUsers,
    },
    {
        title: 'Upcoming',
        path: '/type/movie/upcoming',
        icon: RiCalendarEventFill,
    },
    {
        title: 'Top Rated',
        path: '/type/movie/top_rated',
        icon: RiFilePaper2Line,
    },
];
const TV_SHOWS_DROPDOWN_LINK = [
    {
        title: 'popular',
        path: '/tv/popular',
        icon: BiCategoryAlt,
    },
    {
        title: 'Airing Today',
        path: '/tv/airing_today',
        icon: FiUsers,
    },
    {
        title: 'On TV',
        path: '/tv/on_the_air',
        icon: RiCalendarEventFill,
    },
    {
        title: 'Top Rated',
        path: '/tv/top_rated',
        icon: RiFilePaper2Line,
    },
];

export { MOVIES_DROPDOWN_LINK, TV_SHOWS_DROPDOWN_LINK };