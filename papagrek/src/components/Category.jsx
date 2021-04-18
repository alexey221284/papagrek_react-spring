import React from 'react';
import Api from "./Api";
import CategoryItem from "./CategoryItem";

class Category extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryItemsJSX: null
		};
	}

	async componentDidMount() {
		try {
			let allCategory = await Api.get('/category');
			let categoryTitle = allCategory.data;

			let categoryItemsJSX = categoryTitle
				.map(item => <CategoryItem title={item.title} id={item.id}/>
			);
			console.log("categoryItemsJSX " + categoryItemsJSX);

			this.setState({
				...this.state, ...{
					categoryItemsJSX
				}
			});
		} catch (e) {
			console.log(`Axios request failed: ${e}`);
		}
	}

	render() {
		let {categoryItemsJSX} = this.state;

		return (
			<div className="category">
				<p>Категории товаров:</p>
				{ categoryItemsJSX }
			</div>
		)
	}
}

export default Category