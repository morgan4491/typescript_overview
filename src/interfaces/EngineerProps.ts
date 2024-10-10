interface EngineerProps {
    programmingLanguages: String[];

    printProgrammingLanguages(): void;    // The interface sets 'type' for the method within the class. This is similar to setting the value type for a parameter, but on a class level
    getProgrammingLanguages(): String[];
}

export default EngineerProps;