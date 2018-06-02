import React from "react";
import Header from "components/Header/Header.jsx";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Search from "@material-ui/icons/Search";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";
import withStyles from "material-ui/styles/withStyles";

class NavBar extends React.Component {
  constructor(props)  {
    super(props);
    console.log(navbarsStyle);

  }
  render() {
      const { classes } = this.props;
      return (
        <Header
          brand="NutMeg"
          color="primary"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  News
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  buttonText="Leagues"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    "Premier League",
                    "La Liga",
                    "Bundesliga"
                  ]}
                />
              </ListItem>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  buttonText="Countries"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    "England",
                    "Spain",
                    "Germany",
                    { divider: true },
                    "India LOL"
                  ]}
                />
              </ListItem>
            </List>
          }
          rightLinks={
            <div>
              <CustomInput
                white
                inputRootCustomClasses={classes.inputRootCustomClasses}
                formControlProps={{
                  className: classes.formControl
                }}
                inputProps={{
                  placeholder: "Search",
                  inputProps: {
                    "aria-label": "Search",
                    className: classes.searchInput
                  }
                }}
              />
              <IconButton color="white">
                <Search className={classes.searchIcon} />
              </IconButton>
            </div>
          }
        />

      );
  }
}

//
// render() {
//   const { classes } = this.props;
//   return (
//     <Header
//       brand="Brand"
//       color="primary"
//       leftLinks={
//         <List className={classes.list}>
//           <ListItem className={classes.listItem}>
//             <Button
//               href="#pablo"
//               className={classes.navLink}
//               onClick={e => e.preventDefault()}
//               color="transparent"
//             >
//               Link
//             </Button>
//           </ListItem>
//           <ListItem className={classes.listItem}>
//             <Button
//               href="#pablo"
//               className={classes.navLink}
//               onClick={e => e.preventDefault()}
//               color="transparent"
//             >
//               Link
//             </Button>
//           </ListItem>
//         </List>
//       }
//       rightLinks={
//         <div>
//           <CustomInput
//             white
//             inputRootCustomClasses={classes.inputRootCustomClasses}
//             formControlProps={{
//               className: classes.formControl
//             }}
//             inputProps={{
//               placeholder: "Search",
//               inputProps: {
//                 "aria-label": "Search",
//                 className: classes.searchInput
//               }
//             }}
//           />
//           <IconButton color="white">
//             <Search className={classes.searchIcon} />
//           </IconButton>
//         </div>
//       }
//     />
//
//   );
export default withStyles(navbarsStyle)(NavBar);
