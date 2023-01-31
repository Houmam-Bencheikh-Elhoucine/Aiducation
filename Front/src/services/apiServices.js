import axios from 'axios';

export function getAnnouncements() {
    return axios.get('http://localhost:8000/api/announcements').then(res => {
        return res.data
    })
}