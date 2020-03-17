import React from 'react';
import './Archives.modules.css';

const archives = () => {
    return (
    <div className="Archives">
		<div className="side-card card">
			<p className="card-title">Contributors</p>
			<ul>
				<li>Avensky</li>
				<li>Avenskypro</li>
			</ul>
			<p className="card-title">Blog Archive</p>
			<div className="list">
				<ul>
					<div className="card-list-item">
                        <input id="togList1" type="checkbox" />
                        <label>
                            <span><li>2013(23)</li></span>
							<span><li>2013(23)</li></span>
					    </label>
					    <div className="list">
					        <ul>
								<div className="card-list-item">
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
			<p className="card-title">Statement:</p>
			<p className="card-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	</div>)
}

export default archives;