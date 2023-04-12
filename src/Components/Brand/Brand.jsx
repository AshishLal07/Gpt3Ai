import './brand.css';
import { google, slack, atlassian, shopify, dropbox } from './import';
const Brand = () => {
	return (
		<div className="gpt3__brand section__pading">
			<div>
				<img src={google} alt="Google" />
			</div>
			<div>
				<img src={slack} alt="Slack" />
			</div>
			<div>
				<img src={atlassian} alt="Altassian" />
			</div>
			<div>
				<img src={dropbox} alt="Dropbox" />
			</div>
			<div>
				<img src={shopify} alt="Shopify" />
			</div>
		</div>
	);
};

export default Brand;
