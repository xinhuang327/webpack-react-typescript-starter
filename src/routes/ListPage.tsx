import * as React from 'react';
import { connect } from 'typed-dva';
import { Link } from 'react-router';
let styles = require('./ListPage.less')
import { listSelector } from '../models/item/selectors';
import ItemList from '../components/ItemList';
import Layout from '../components/Layout';

class ListPage extends React.Component<any, any>{
	render() {
		let { loading, items, page, maxPage, activeType, location } = this.props
		return (
			<Layout>
				<div className={styles.normal}>
					<ItemList
						loading={loading}
						items={items}
						page={page}
						maxPage={maxPage}
						activeType={activeType}
						location={location}
					/>
				</div>
			</Layout>
		);
	}

}

function mapStateToProps(state, ownProps) {
	return {
		loading: state.loading.global,
		...listSelector(state, ownProps),
	};
}

export default connect(mapStateToProps)(ListPage);
