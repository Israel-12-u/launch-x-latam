class CodigoCesar:  # Definimos la clase
    def __init__(self):  # Definimos el metodo constructor
        pass

    def cifradoDesifrado(self):  # metodo que cifrara y descifrara
        # variable que ayudara al ciclo while #variable que ayudara a guardar el texto
        respuesta = "S"
        while respuesta == "S" or respuesta == "s":
            cifrado = ""  # variable ayudara a guardar el texto cifrado
            desifrado = ""  # Si respuesta es S o s
        # Insertar tu cadena desde el teclado
            cadena = input("Inserta tu cadena ")
         # Pregunta la accion que quieres hacer con la cadena
            preguta = input("Desea cifrar o desifrar? ")
            if preguta == "Cifrar" or preguta == "cifrar":  # si es cifrar
                for scannear in cadena:  # lee la variable cadena
                    # convierte tu cadena en codigo ASCII
                    alfabeto = ord(scannear)
                    # convierte tu codigo ASCCI en caracter pero restandole 14
                    cifrado += chr(alfabeto-(7*2))
                print(cifrado)  # te imprime tu cadena ya cifrada
            elif preguta == "Desifrar" or preguta == "desifrar":  # si es desifrar
                for scannear in cadena:  # Lee la variable cadena
                    # la variable scannear del ciclo for la convierte en ASCCI
                    alfabeto = ord(scannear)
                    # Convierte tu codigo ASCCI a caracter teniendo sumandole 14
                    desifrado += chr(alfabeto+(7*2))
                print(desifrado)  # imprime tu texto ya desifrado
            # pregunta si deseas cifrar o desifrar otra cadena
            respuesta = input("Desea cifrar o desifrar otra cadena ?")
            if respuesta == "N" or respuesta == "n":  # si la respuesta es N o n
                break  # se termina el codigo


objeto_cifrado = CodigoCesar()  # llamamos a la clase
# llamamos al metodo que ara todas la funciones.
objeto_cifrado.cifradoDesifrado()
