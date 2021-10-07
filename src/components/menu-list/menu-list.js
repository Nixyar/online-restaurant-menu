import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuError, menuLoaded, menuRequested} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {
    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems().then(val => {
                this.props.menuLoaded(val);
            }
        ).catch(this.props.menuError());
    }

    render() {
        const {menuItems, loading, error} = this.props;
        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <Error/>
        }
        return (
            <ul className="menu__list">
                {menuItems.map(item => {
                    return <MenuListItem key={item.id} item={item}/>
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuRequested, menuLoaded, menuError
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
