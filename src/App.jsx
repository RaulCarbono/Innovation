import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import BotAnimation from './assets/BotAnimation';
import { Button, TextField, Tooltip } from '@mui/material';

import './App.css';

const problems = ['Sin conexion a internet', 'Controlador sin fluido electrico'];

const answers = {
  'Problema 1': 'Respuesta al problema 1',
  'Problema 2': 'Respuesta al problema 2',
  'Problema 3': 'Respuesta al problema 3',
  // ... más respuestas
};

function App() {
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleProblemChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedProblems(typeof value === 'string' ? value.split(',') : value);
    if (value.length > 0) {
      setSelectedAnswer(answers[value[value.length - 1]]);
    }
  };
  // const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Q&A Resolve
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        sx={{ mt: 4 }}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <BotAnimation />
            <FormControl fullWidth>
              <InputLabel id="mutiple-select-label">Problemas</InputLabel>
              <Select
                labelId="mutiple-select-label"
                multiple
                value={selectedProblems}
                onChange={handleProblemChange}
                input={<OutlinedInput label="Problemas" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {problems.map((problem) => (
                  <MenuItem
                    key={problem}
                    value={problem}
                  >
                    <Checkbox checked={selectedProblems.indexOf(problem) > -1} />
                    <ListItemText primary={problem} />
                  </MenuItem>
                ))}
              </Select>
              <TextField
                sx={{ mt: 2, borderRadius: '50px' }}
                label="Ingresa el serial del controlador "
              >
                Serial
              </TextField>
              <div className="container_button">
                <Button
                  variant="outlined"
                  size="medium"
                  sx={{ width: '300px' }}
                >
                  Generar respuesta
                </Button>
                <Tooltip title="Pronto estara disponible en fase beta">
                  <span>
                    <Button
                      variant="outlined"
                      disabled
                      sx={{ width: '300px', color: '#000' }}
                    >
                      Registrar
                    </Button>
                  </span>
                </Tooltip>
              </div>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography variant="subtitle1">Respuesta:</Typography>
            <Typography variant="body1">{selectedAnswer}</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
