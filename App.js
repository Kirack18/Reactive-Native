import React from "react";
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("./assets/me.jpg")} style={styles.image} />
      <Text style={styles.header}>Kayo Vinicius</Text>
      <Text style={styles.subheader}>
        Estudante de ADS SENAC/Porto Digital
      </Text>
      <Text style={styles.paragraph}>
        Olá, meu nome é Kayo Vinicius, sou estudante de Análise e Desenvolvimento de Sistemas, vivo na cidade de Recife, Torres
      </Text>
      <Text style={styles.paragraph}>
        Qualificação Profissional:
      </Text>
      <Text style={styles.listItem}>
        • Curso Técnico-escolar em Redes de Computadores 2020-2022 - ETE Pastor Isaac Martins Rodrigues
      </Text>
      <Text style={styles.listItem}>
        • Tecnólogo de ADS em desenvolvimento pelo Porto Digital/SENAC 2023-2025
      </Text>
      <Text style={styles.listItem}>
        • Bacharel de S.I. em desenvolvimento pela UFRPE 2023-2028
      </Text>
      <Text style={styles.listItem}>
        • Jovem Aprendiz em Administração em Saúde
        </Text>
      
    </ScrollView>
  );
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Formação</Text>
      <Text style={styles.subheader}>
        Formação e Atividades Extracurriculares
      </Text>
      <Text style={styles.paragraph}>
        • Ensino médio Técnico - Redes de Computadores
      </Text>
      <Text style={styles.paragraph}>
        • Torneio Virtual de Ciências 
      </Text>
      <Text style={styles.paragraph}>
        • Projeto Reutilizaçãode Aguás Servidas - PET-FACEPE
        </Text>
    </ScrollView>
  );
}

function EducationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Human Skills</Text>
      <Text style={styles.subheader}>
      Human Skills
      </Text>
      <Text style={styles.paragraph}>
        Resolução de Problemas
      </Text>
      <Text style={styles.paragraph}>
        Criativo
      </Text>
      <Text style={styles.paragraph}>
        Comprometimento
      </Text>
      <Text style={styles.paragraph}>
        Rápido Aprendizado
      </Text>
      <Text style={styles.paragraph}>
        Trabalho em Equipe
      </Text>
      <Text style={styles.paragraph}>
        Observador
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Experiência") {
              iconName = focused ? "briefcase" : "briefcase-outline";
            } else if (route.name === "Human Skills") {
              iconName = focused ? "school" : "school-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#008080",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#f8f8f8",
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Experiência" component={ExperienceScreen} />
        <Tab.Screen name="Human Skills" component={EducationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subheader: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "justify",
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  listItem: {
    fontSize: 16,
    marginBottom: 6,
    textAlign: "justify",
  },
  link: {
    color: "#008080",
    textDecorationLine: "underline",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignSelf: "center",
    marginBottom: 20,
  },
});
