import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-market.pedagogico.cubos.academy',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});
