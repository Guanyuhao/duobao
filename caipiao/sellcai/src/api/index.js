import axios from 'axios'
import {
	NewsResource
} from './resource'
export default {
	getNews() {
		return axios.get( NewsResource )
	}
}
