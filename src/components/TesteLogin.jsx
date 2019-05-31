import React from "react";
import { SelectionDisk } from "./SelectionDisk";
import { Tooltip } from "./Tooltip";
import { Scrollbars } from "react-custom-scrollbars";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Stack } from "./Stack";
import { Paper } from "@material-ui/core";
import Can from "./Can"
import Button from "@material-ui/core/Button";
import api from "../Services/Api";

export class TesteLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }


deslogar =()=>{
    localStorage.removeItem("@obz-Token");
    window.location.reload();
}


adm = ()=>{
    api.get("/api/login/admin").then(x => 
        {if(x)
        this.setState({admMessage: x.data})
        else
        this.setState({admMessage: "voce não é o adm"})
        })
        .catch(y=>null);
}

  render() {
      return(
          <div>

              <Paper>
                  <span>Este é um site de testes</span>
              </Paper>
              <Can>
              <Paper>
                  <span>voce está logado</span>
                  <div>seu token é {localStorage.getItem("@obz-Token")}</div>
              </Paper>
              <Paper>
                  <span>{this.state.admMessage}</span>
                  <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.adm}
            > testar adm
            </Button>
              </Paper>

              <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.deslogar}
            > Sign out
            </Button>
            </Can>
          </div>
      )
  }
}
