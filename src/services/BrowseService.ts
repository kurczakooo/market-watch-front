import axios from 'axios';
import config from '../config';
// import type {
//     AssetListElementProps,
// } from '../types/browse';

const API_URL = `${config.apiBaseUrl}market-data`;

export default {
    /**
     * Fetch assets data for the browse screen.
     * @returns {Promise} Promise object with browse screen data
     */
    fetchBrowseAssetsData() {
        return axios.get(`${API_URL}/all-assets-brief`);
    },
};
