export type ReactElement = {
  type: string | Function;
  props: Props;
  dom?: Node | null;
  child?: ReactElement | null;
};

type Props = {
  [key: string]: any;
  children?: ReactElement[];
};
