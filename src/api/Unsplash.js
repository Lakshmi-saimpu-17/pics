import axios from 'axios';

export default axios.create({
    baseURL:  'https://api.unsplash.com/',
    headers: {
        Authorization:'Client-ID AhROZjCmOntay0IvYAiVa-4QJ00Jv906HGXY6Al2ghg'
    }
});