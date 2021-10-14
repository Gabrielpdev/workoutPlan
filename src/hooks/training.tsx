import React ,{ createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Exercise {
  id: string;
  title: string;
  weight: string;
  repeat: string;
  series: string;
  time: string;
  isCompleted: boolean;
}

interface Trainings {
  id: string;
  title: string;
  exercises: Exercise[];
}

interface TrainingContextProps {
  trainings: Trainings[];
  trainingSelected: Trainings;
  trainingStorageLoading: boolean
  selectedTraining: (id: string) => void;
  createTraining: (data: Trainings[]) => void;
  createExercise: (data: Exercise) => void;
  completeExercise: (id: string) => void;
}

interface TrainingProviderProps {
  children: ReactNode;
}

const dataKey = '@workPlan:training'

export const TrainingContext = createContext({} as TrainingContextProps);

export function TrainingProvider({ children }: TrainingProviderProps){
  const [trainings, setTrainings] = useState<Trainings[]>([]);
  const [trainingSelected, setTrainingSelected] = useState<Trainings>({} as Trainings);

  const [trainingStorageLoading, setTrainingStorageLoading] = useState(true);

  // console.log(trainings)

  function selectedTraining(id){
    const filteredTraining = trainings.filter((training) => training.id === id)[0];

    setTrainingSelected(filteredTraining)
  }

  async function createTraining(data){
    await AsyncStorage.setItem(dataKey, JSON.stringify(data));
    setTrainings(data)
  }

  async function createExercise(data: Exercise){
    const newTrainings = trainings.map((training) => {
      if(training.id === trainingSelected.id){
        training.exercises.push(data)

        setTrainingSelected({
          ...training,
          exercises: [...training.exercises, data]
        })
      }
      return training
    })
    
    
    await AsyncStorage.setItem(dataKey, JSON.stringify(newTrainings));
    setTrainings(newTrainings)
  }

  async function completeExercise(id: string){
    const newTrainings = trainings.map((training) => {
      if(training.id === trainingSelected.id){
        setTrainingSelected({
          ...training,
          exercises: training.exercises.map(exercise => {
            if(exercise.id === id){
              return {
                ...exercise,
                isCompleted: !exercise.isCompleted
              }
            }
            return exercise
          })
        })

        return {
          ...training,
          exercises: training.exercises.map(exercise => {
            if(exercise.id === id){
              return {
                ...exercise,
                isCompleted: !exercise.isCompleted
              }
            }
            return exercise
          })
        }
      }
      return training
    })
    
    await AsyncStorage.setItem(dataKey, JSON.stringify(newTrainings));
    setTrainings(newTrainings)
  }

  useEffect(() => {
    async function loadTrainingStorageDate(){
      const response = await AsyncStorage.getItem(dataKey);
      const trainingsFormatted = response ? JSON.parse(response) : [];
  
      setTrainings(trainingsFormatted)
      setTrainingStorageLoading(false)
    }
  
    loadTrainingStorageDate();
  },[])

  return(
    <TrainingContext.Provider value={{
      trainings,
      trainingSelected,
      trainingStorageLoading,
      selectedTraining,
      createTraining,
      createExercise,
      completeExercise
    }}>
      {children}
    </TrainingContext.Provider>
  )
}

export function useTraining(){
  const context = useContext(TrainingContext);
  
  return context;
}