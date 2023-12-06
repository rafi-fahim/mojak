interface paramType {
  width: string | number;
  height: string | number;
  fill: string;
}

const FacebookSvg = ({ width, height, fill }: paramType) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className="hover:scale-125 hover:cursor-pointer transition-all duration-75 ease-in-out"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
    </svg>
  );
};

export default FacebookSvg;