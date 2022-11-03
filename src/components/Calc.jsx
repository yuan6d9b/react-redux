import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  addNumAction,
  subNumAction,
  fetchHomeMultidataAction,
} from "../store/actions";

export class Calc extends PureComponent {
  addNum(num) {
    this.props.addNumAction(num);
  }
  subNum(num) {
    this.props.subNumAction(num);
  }
  fetchHome() {
    this.props.fetchHomeAction();
  }
  render() {
    const { count, banners } = this.props;
    return (
      <>
        <button onClick={(e) => this.addNum(1)}>+1</button>
        <button onClick={(e) => this.subNum(1)}>-1</button>
        <button onClick={(e) => this.fetchHome()}>home</button>
        <h1>{count}</h1>
        <ul>
          {banners.map((item) => {
            return <li key={item.link}>{item.title}</li>;
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  banners: state.banners,
});

const mapDispatchToProps = (dispatch) => ({
  addNumAction(num) {
    dispatch(addNumAction(num));
  },
  subNumAction(num) {
    dispatch(subNumAction(num));
  },
  fetchHomeAction() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
