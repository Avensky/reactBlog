import React, { Component } from 'react';
import './Archives.modules.css';
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class Archives extends Component {

	componentDidMount() {
        console.log(this.props)
//        this.props.onFetchPosts()
	}
	
	fetchYearHandler() {
	}
	render() {
//        let archives = <p style={{textAlign: 'center'}}>Something went wrong!</p> 
//		if (!this.props.error) {
//		}
		let showAuthors =  this.props.posts.map(post => <li key={post.id}>{post.author}</li>)
		let showAuthor = [...new Set(showAuthors)];

		let showYears = this.props.posts.map(post => {
			return (
				<li key={post.id}>
					{post.dates}
				</li>
			)
		})

		return (
			<div>
				<div className="Archives">
				<p className="ArchiveTitle">Contributors:</p>
				<ul>{ showAuthor }</ul>
		
				<p className="ArchiveTitle">Blog Archive</p>
				<div className="list">
					<ul>
						{showYears}
						<div className="ArchiveList-item">
						<ul>
							{showYears}
						</ul>
							<div className="list">
								<ul>
									<div className="ArchiveList-item">
										<input id="togList11" type="checkbox" />
										<label>
											<span><li>August(2)</li></span>
											<span><li>August(2)</li></span>
										</label>
										<div className="list">
											<ul>
												<li>Blog Title</li>
												<li>Blog Title</li>
											</ul>
										</div>
									</div>
									<li>July(2)</li>
									<li>June(2)</li>
									<li>May(10)</li>
								</ul>
							</div>
						</div>
					</ul>
				</div>
					<p className="ArchiveTitle">Statement:</p>
					<p className="ArchiveInfo">Lorem ipsum dolor sit amet, 
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        posts: state.blog.posts,
        featuredPost: state.blog.featuredPost,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts:  () => dispatch( actions.fetchPosts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Archives);