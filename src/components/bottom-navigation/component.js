import React, { useEffect } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    fontSize: 5,
    color: "#DADADA",
    fill: "#DADADA",
    "&$selected": {
      fontSize: 5,
      color: "#F15B5D",
      fill: "#F15B5D"
    }
  },
  selected: {
    fontSize: 5,
    color: "#F15B5D",
    fill: "#F15B5D"
  },
  label: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: "bold",
    "&$selected": {
      fontSize: 11,
      fontWeight: "bold"
    }
  }
};

function Component(props) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    let value = 0;
    switch (props.location.pathname) {
      case "/":
        value = 0;
        break;
      case "/video":
        value = 1;
        break;
      case "/explore":
        value = 2;
        break;
      case "/tentang":
        value = 3;
        break;
      default:
        value = 0;
    }
    setValue(value);
  });

  const handleChange = (event, value) => {
    setValue(value);
    switch (value) {
      case 0:
        props.history.push("/");
        return;
      case 1:
        props.history.push("/video");
        return;
      case 2:
        props.history.push("/explore");
        return;
      case 3:
        props.history.push("/tentang");
        return;
      default:
        return;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: 446,
        position: "fixed",
        bottom: 0,
        boxShadow: "1px 0px 5px rgba(0, 0, 0, 0.1)",
        background: "#fafafa"
      }}
    >
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          root: classes.root,
          label: classes.label
        }}
        label="Beranda"
        icon={
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              classes={{
                selected: classes.selected,
                root: classes.root
              }}
              d="M10.9625 3.09287C10.896 3.02929 10.8076 2.9938 10.7156 2.9938C10.6236 2.9938 10.5352 3.02929 10.4688 3.09287L2.25 10.9442C2.2151 10.9776 2.18733 11.0177 2.16838 11.0621C2.14943 11.1066 2.13968 11.1544 2.13974 11.2027L2.1384 18.5714C2.1384 18.9503 2.28891 19.3137 2.55682 19.5816C2.82472 19.8495 3.18809 20 3.56697 20H7.85715C8.04659 20 8.22827 19.9248 8.36222 19.7908C8.49618 19.6568 8.57143 19.4752 8.57143 19.2857V13.2143C8.57143 13.1196 8.60906 13.0287 8.67604 12.9618C8.74301 12.8948 8.83385 12.8572 8.92857 12.8572H12.5C12.5947 12.8572 12.6856 12.8948 12.7525 12.9618C12.8195 13.0287 12.8571 13.1196 12.8571 13.2143V19.2857C12.8571 19.4752 12.9324 19.6568 13.0664 19.7908C13.2003 19.9248 13.382 20 13.5714 20H17.8598C18.2387 20 18.6021 19.8495 18.87 19.5816C19.1379 19.3137 19.2884 18.9503 19.2884 18.5714V11.2027C19.2884 11.1544 19.2787 11.1066 19.2598 11.0621C19.2408 11.0177 19.213 10.9776 19.1781 10.9442L10.9625 3.09287Z"
            />
            <path
              classes={{
                selected: classes.selected,
                root: classes.root
              }}
              d="M21.2014 9.47098L17.8621 6.27634V1.42857C17.8621 1.23913 17.7868 1.05745 17.6529 0.923495C17.5189 0.78954 17.3372 0.714286 17.1478 0.714286H15.0049C14.8155 0.714286 14.6338 0.78954 14.4998 0.923495C14.3659 1.05745 14.2906 1.23913 14.2906 1.42857V2.85714L11.7049 0.384821C11.463 0.140178 11.1031 0 10.7143 0C10.3268 0 9.96787 0.140179 9.72591 0.385268L0.230374 9.47009C-0.0473045 9.73794 -0.0821259 10.1786 0.170553 10.4687C0.234004 10.542 0.311696 10.6016 0.3989 10.6438C0.486104 10.6861 0.580997 10.7102 0.677803 10.7146C0.774608 10.719 0.871303 10.7037 0.962 10.6696C1.0527 10.6354 1.1355 10.5832 1.20537 10.5161L10.4688 1.66429C10.5352 1.60071 10.6237 1.56522 10.7156 1.56522C10.8076 1.56522 10.896 1.60071 10.9625 1.66429L20.2268 10.5161C20.3633 10.6469 20.5461 10.7184 20.7351 10.7147C20.9241 10.711 21.104 10.6325 21.2353 10.4964C21.5094 10.2125 21.4866 9.74375 21.2014 9.47098Z"
            />
          </svg>
        }
      />
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          root: classes.root,
          label: classes.label
        }}
        label="Video"
        icon={
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5397 18.916C31.2287 18.9157 30.9211 18.8502 30.637 18.7236C30.5708 18.6943 30.5078 18.6584 30.4488 18.6167L24.705 14.5736C24.4137 14.3686 24.176 14.0965 24.0119 13.7803C23.8477 13.4642 23.762 13.1132 23.762 12.7569V7.24306C23.762 6.88683 23.8477 6.53584 24.0119 6.21968C24.176 5.90351 24.4137 5.63144 24.705 5.42639L30.4488 1.38333C30.5078 1.34156 30.5708 1.30573 30.637 1.27639C30.9753 1.12597 31.3459 1.06247 31.715 1.09167C32.0841 1.12086 32.44 1.24183 32.7505 1.44357C33.061 1.64532 33.3162 1.92144 33.4928 2.24686C33.6694 2.57228 33.762 2.93668 33.762 3.30694V16.6931C33.762 17.2824 33.5278 17.8477 33.1111 18.2644C32.6943 18.6812 32.1291 18.9153 31.5397 18.9153V18.916Z"
              classes={{
                selected: classes.selected,
                root: classes.root,
                label: classes.label
              }}
            />
            <path
              d="M17.9286 20H5.15084C3.89883 19.9987 2.69846 19.5008 1.81315 18.6155C0.927838 17.7302 0.429906 16.5298 0.428619 15.2778V4.72222C0.429906 3.47021 0.927838 2.26984 1.81315 1.38453C2.69846 0.499219 3.89883 0.00128685 5.15084 0H17.962C19.2051 0.00147028 20.3969 0.495949 21.2759 1.37497C22.1549 2.25399 22.6494 3.44577 22.6508 4.68889V15.2778C22.6496 16.5298 22.1516 17.7302 21.2663 18.6155C20.381 19.5008 19.1806 19.9987 17.9286 20V20Z"
              classes={{
                selected: classes.selected,
                root: classes.root,
                label: classes.label
              }}
            />
          </svg>
        }
      />

      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          root: classes.root,
          label: classes.label
        }}
        label="Explore"
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48606 0 0 4.48606 0 10C0 15.5139 4.48606 20 10 20C15.5139 20 20 15.5139 20 10C20 4.48606 15.5139 0 10 0ZM15.0514 5.44856L12.7976 11.0832C12.6428 11.4702 12.4111 11.8217 12.1164 12.1164C11.8217 12.4111 11.4702 12.6428 11.0832 12.7976L5.44856 15.0514C5.37866 15.0794 5.30209 15.0863 5.22834 15.0711C5.15459 15.056 5.0869 15.0196 5.03367 14.9663C4.98043 14.9131 4.94399 14.8454 4.92886 14.7717C4.91373 14.6979 4.92058 14.6213 4.94856 14.5514L7.2024 8.91683C7.35716 8.52985 7.58892 8.17834 7.88363 7.88363C8.17834 7.58892 8.52985 7.35716 8.91683 7.2024L14.5514 4.94856C14.6213 4.92058 14.6979 4.91373 14.7717 4.92886C14.8454 4.94399 14.9131 4.98043 14.9663 5.03367C15.0196 5.0869 15.056 5.15459 15.0711 5.22834C15.0863 5.30209 15.0794 5.37866 15.0514 5.44856V5.44856Z"
              classes={{
                selected: classes.selected,
                root: classes.root,
                label: classes.label
              }}
            />
          </svg>
        }
      />
      <BottomNavigationAction
        classes={{
          selected: classes.selected,
          root: classes.root,
          label: classes.label
        }}
        label="Tentang"
        icon={
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8518 0C5.33786 0 0.851807 4.48606 0.851807 10C0.851807 15.5139 5.33786 20 10.8518 20C16.3657 20 20.8518 15.5139 20.8518 10C20.8518 4.48606 16.3657 0 10.8518 0ZM10.8518 15.3803C10.6616 15.3803 10.4757 15.3239 10.3176 15.2182C10.1595 15.1126 10.0362 14.9624 9.96346 14.7867C9.89068 14.611 9.87164 14.4177 9.90874 14.2312C9.94585 14.0446 10.0374 13.8733 10.1719 13.7388C10.3064 13.6044 10.4777 13.5128 10.6642 13.4757C10.8507 13.4386 11.0441 13.4576 11.2198 13.5304C11.3955 13.6032 11.5456 13.7264 11.6513 13.8845C11.757 14.0427 11.8133 14.2286 11.8133 14.4188C11.8133 14.6738 11.712 14.9183 11.5317 15.0987C11.3514 15.279 11.1068 15.3803 10.8518 15.3803ZM11.896 5.70962L11.6201 11.575C11.6201 11.779 11.539 11.9747 11.3948 12.1189C11.2505 12.2632 11.0549 12.3442 10.8508 12.3442C10.6468 12.3442 10.4512 12.2632 10.3069 12.1189C10.1627 11.9747 10.0816 11.779 10.0816 11.575L9.80565 5.7125V5.7101C9.79961 5.5692 9.82213 5.42853 9.87189 5.29656C9.92164 5.1646 9.99758 5.04407 10.0951 4.94223C10.1927 4.84039 10.3099 4.75935 10.4396 4.70399C10.5693 4.64862 10.7089 4.62008 10.8499 4.62008C10.9909 4.62008 11.1305 4.64862 11.2602 4.70399C11.3899 4.75935 11.5071 4.84039 11.6046 4.94223C11.7022 5.04407 11.7781 5.1646 11.8279 5.29656C11.8776 5.42853 11.9002 5.5692 11.8941 5.7101L11.896 5.70962Z"
              classes={{
                selected: classes.selected,
                root: classes.root,
                label: classes.label
              }}
            />
          </svg>
        }
      />
    </BottomNavigation>
  );
}

export default withRouter(withStyles(styles)(Component));
