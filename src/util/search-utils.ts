import { RouteComponentProps } from "react-router-dom";
import * as QueryString from "query-string"

export const getSearchText = (props: RouteComponentProps) => {
    const { location: { search } } = props;
    const queryParams = QueryString.parse(search);
    const searchTxt = queryParams.search as string;
    return searchTxt;
  }