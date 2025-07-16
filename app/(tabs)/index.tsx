import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native';

<<<<<<< HEAD
=======
import Carusel from '@/components/carrusel';
import ContactForm from '@/components/Components_Victor/ContactForm'; 
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import { Footer } from '@/components/Footer';
>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9
import { Navbar } from '@/components/Navbar';
import HeroVideo from '@/components/ui/PresentacionVideo';
<<<<<<< HEAD
import SeccionMembresia from '@/components/Components_Victor/SeccionMembresia';
import WeAreGymso from '@/components/ui/PresentacionGymso';
import Carusel from '@/components/carrusel';
import SeccionHorario from '@/components/Components_Victor/SeccionHorario';
import ContactMapSection from '@/components/Components_Victor/ContactMapSection';
=======

const { height: windowHeight } = Dimensions.get('window');
>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.ttf'),
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-ExtraBold': require('@/assets/fonts/Montserrat-ExtraBold.ttf'),
  });

<<<<<<< HEAD
=======
  const [activeSection, setActiveSection] = useState<string | null>('inicio');

  const scrollViewRef = useRef<ScrollView>(null);
  const heroVideoRef = useRef<View>(null);
  const membresiaRef = useRef<View>(null);
  const weAreGymsoRef = useRef<View>(null);
  const caruselRef = useRef<View>(null);
  const horarioRef = useRef<View>(null);
  const contactFormRef = useRef<View>(null);

  const sectionLayouts = useRef<{ [key: string]: { y: number; height: number } }>({});

  const measureSection = (sectionName: string, ref: React.RefObject<View>) => {
    ref.current?.measureLayout(
      scrollViewRef.current as any,
      (x, y, width, height) => {
        sectionLayouts.current[sectionName] = { y, height };
      },
      () => { }
    );
  };

  const scrollToSection = (section: string) => {
    const layout = sectionLayouts.current[section];
    if (layout) {
      scrollViewRef.current?.scrollTo({ y: layout.y, animated: true });
      setActiveSection(section);
    } else if (section === 'inicio') {
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
      setActiveSection('inicio');
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;

    let currentActiveSection: string | null = null;

    const sections = [
      { name: 'inicio', ref: heroVideoRef },
      { name: 'sobreNosotros', ref: weAreGymsoRef },
      { name: 'clases', ref: caruselRef },
      { name: 'horarios', ref: horarioRef },
      { name: 'contacto', ref: contactFormRef },
    ];

    const activationOffset = windowHeight * 0.3;

    for (let i = sections.length - 1; i >= 0; i--) {
      const { name } = sections[i];
      const layout = sectionLayouts.current[name];

      if (layout) {
        const sectionTop = layout.y;
        const sectionBottom = layout.y + layout.height;

        if (scrollY + activationOffset >= sectionTop && scrollY < sectionBottom) {
          currentActiveSection = name;
          break;
        }
      }
    }

    if (scrollY < (sectionLayouts.current['sobreNosotros']?.y || 200) - activationOffset) {
      currentActiveSection = 'inicio';
    }

    if (currentActiveSection !== activeSection) {
      setActiveSection(currentActiveSection);
    }
  };

>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9
  if (!fontsLoaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
<<<<<<< HEAD
      <Navbar />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroVideo />
        
        <View style={styles.content}>
=======
      <StatusBar hidden={true} />
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View ref={heroVideoRef} onLayout={() => measureSection('inicio', heroVideoRef)}>
          <HeroVideo />
        </View>

        <View style={styles.content} ref={membresiaRef} onLayout={() => measureSection('membresia', membresiaRef)}>
>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9
          <SeccionMembresia />
          <View style={styles.separator} />

<<<<<<< HEAD
          <WeAreGymso />
          <View style={styles.separator} />

          <Carusel />
          <View style={styles.separator} />

          <SeccionHorario />
          <View style={styles.separator} />

          <ContactMapSection />
          <View style={styles.separator} />
        </View>
=======
        <View style={styles.weAreContainer} ref={weAreGymsoRef} onLayout={() => measureSection('sobreNosotros', weAreGymsoRef)}>
          <WeAreGymso />
        </View>

        <View ref={caruselRef} onLayout={() => measureSection('clases', caruselRef)}>
          <Carusel />
        </View>

        <View style={styles.horarioContainer} ref={horarioRef} onLayout={() => measureSection('horarios', horarioRef)}>
          <SeccionHorario />
        </View>

        <View style={styles.contactFormContainer} ref={contactFormRef} onLayout={() => measureSection('contacto', contactFormRef)}>
          <ContactForm />
        </View>

        <Footer />
>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#121212',
=======
    backgroundColor: '#ffffff', 
>>>>>>> 55fd89fe17f4bd25b6d083e3b171f16238db55b9
  },
  scrollContent: {
   
    flexGrow: 1,
  },
  content: {
    padding: 20,
    backgroundColor: '#121212',
  },
  separator: {
    height: 30,
    backgroundColor: 'transparent',
  },
  weAreContainer: {
    paddingTop: 40,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  horarioContainer: {
    paddingVertical: 20,
    backgroundColor: '#121212',
  },
  contactFormContainer: {
    paddingVertical: 30,
    backgroundColor: '#fffefeff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffff',
  },
});
